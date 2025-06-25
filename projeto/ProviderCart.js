import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../controller.js";
import { collection, doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../controller.js";

const CartContext = createContext();

export function ProviderCart({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [usuario, setUsuario] = useState(null);
  const [viagens, setViagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "travels"), (snapshot) => {
      const lista = [];
      snapshot.forEach((doc) => {
        lista.push({ id: doc.id, ...doc.data() });
      });
      setViagens(lista);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUsuario(null);
        setCarrinho([]);
        setCarregando(false);
        return;
      }

      setCarregando(true);
      try {
        setUsuario(user);
        
        const carrinhoRef = doc(db, "carrinhos", user.uid);
        const carrinhoSnap = await getDoc(carrinhoRef);

        if (carrinhoSnap.exists()) {
          setCarrinho(carrinhoSnap.data().produtos || []);
        } else {
          await setDoc(carrinhoRef, { produtos: [] });
          setCarrinho([]);
        }
      } catch (error) {
        console.error("Erro ao carregar carrinho:", error.message);
      } finally {
        setCarregando(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (!usuario || carregando) return;

    const salvarCarrinho = async () => {
      try {
        const carrinhoRef = doc(db, "carrinhos", usuario.uid);
        await setDoc(carrinhoRef, { produtos: carrinho });
      } catch (error) {
        console.error("Erro ao salvar carrinho:", error.message);
      }
    };
    
    salvarCarrinho();
  }, [carrinho, usuario, carregando]);

  const adicionarProduto = (produto) => {
    const jaExiste = carrinho.some((item) => item.id === produto.id);
    if (!jaExiste) {
      setCarrinho((prev) => [...prev, produto]);
      return true;
    }
    return false;
  };

  const removerProduto = (id) => {
    setCarrinho((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        carrinho,
        adicionarProduto,
        removerProduto,
        viagens,
        carregando,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CartContext);
}