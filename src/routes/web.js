import { Router } from "express";

const router = Router();

// routes
router.get("/", (req, res) => {
    res.render("home");
  });
   
  router.get("/cart", (req ,res)=> {
     res.render("customers/cart")
  })
  
  router.get("/register", (req , res)=> {
    res.render("auth/register")
  })
  router.get("/login", (req , res)=> {
    res.render("auth/login")
  })
  
  export default router;
