import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for VIEO Productions website
  
  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      // Validate inputs
      if (!name || !email || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'Please provide name, email, and message' 
        });
      }
      
      // Here we would typically send an email or store the contact request
      // For now, we'll just return a success response
      
      return res.status(200).json({ 
        success: true, 
        message: 'Your message has been received. We will contact you shortly.' 
      });
    } catch (error) {
      console.error('Contact form error:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'An error occurred while processing your request. Please try again later.' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
