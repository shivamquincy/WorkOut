import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import { auth, db } from "../firebaseCongif";  // Ensure db is imported
import { doc, setDoc,addDoc,collection,getDoc,getDocs } from "firebase/firestore";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(undefined);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
        setUser(user);
      } else {
        setAuthenticated(false);
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, data: response.user };
    } catch (e) {
      return { success: false, msg: e.message };
    }
  };

  const logout = async () => {
    try{
       await signOut(auth);
       return { sucess: true}
    } catch(e) {
      return {success: false,sg: e.message, error: e}; 
}
}
  
  const register = async (email, password, username, profileUrl) => {
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log('response.user :', response?.user);
      await setDoc(doc(db, "users", response?.user?.uid), {
        username,
        profileUrl,
        userId: response?.user?.uid
      });
      return { success: true, data: response?.user };
    } catch (e) {
      return { success: false, msg: e.message };
    }
  };
  const addWorkout = async (name, category, difficulty,description, reps) => {
    try {
      const docRef = await addDoc(collection(db, "workouts"), {
        name,
        category,
        difficulty,
        description,
        reps: Number(reps), 
      });
      return { success: true, data: docRef.id };
    } catch (e) {
      return { success: false, msg: e.message };
    }
  };
  const getWorkouts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "workouts"));
      let workouts = [];
      querySnapshot.forEach((doc) => {
        workouts.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: workouts };
    } catch (e) {
      return { success: false, msg: e.message };
    }
  };

  // Get workouts by category
  const getWorkoutsByCategory = async (category) => {
    try {
      const q = query(collection(db, "workouts"), where("category", "==", category));
      const querySnapshot = await getDocs(q);
      let workouts = [];
      querySnapshot.forEach((doc) => {
        workouts.push({ id: doc.id, ...doc.data() });
      });
      return { success: true, data: workouts };
    } catch (e) {
      return { success: false, msg: e.message };
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout ,addWorkout,getWorkouts,getWorkoutsByCategory}}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be wrapped inside AuthContextProvider');
  }
  return value;
}
