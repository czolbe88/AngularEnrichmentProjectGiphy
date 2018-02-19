/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package angular_enrichment;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import javax.annotation.Resource;
import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import javax.ws.rs.core.MediaType;


/**
 *
 * @author czolb
 */
@WebServlet(urlPatterns ="/getGif")
public class RetrieveGifServlet extends HttpServlet {
    
    @Resource(lookup="jdbc/AngularEnrichment")
    private DataSource ds;
    
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();
        
        try(Connection conn = ds.getConnection()){
        
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery("select * from gif");
            while( rs.next()){
                JsonObjectBuilder objB = Json.createObjectBuilder();
                objB.add("Title", rs.getString("Title"));
                objB.add("Url", rs.getString("Url"));
                objB.add("User", rs.getString("User"));
                
                arrayBuilder.add(objB.build());

            }
            
            System.out.println("get method called successfully");
            //close it, damn it
            rs.close();
            conn.close();
         
            
        
        } 
        
        catch (SQLException ex) {
            log(ex.getMessage());
            ex.printStackTrace();
           resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        
        //return status code
        resp.setStatus(HttpServletResponse.SC_OK);
      
        
        //media type
        resp.setContentType(MediaType.APPLICATION_JSON); // or "text/html"
        //data
        
        JsonArray gifRecords = arrayBuilder.build();
        
        try(PrintWriter pw = resp.getWriter()){
            pw.println(gifRecords.toString());
        }
        
       
    }
    
    
            
            

}
