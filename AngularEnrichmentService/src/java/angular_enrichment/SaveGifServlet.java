/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package angular_enrichment;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;

/**
 *
 * @author czolb
 */
@WebServlet(urlPatterns = "/saveGif/*")
public class SaveGifServlet extends HttpServlet {

    @Resource(lookup = "jdbc/AngularEnrichment")
    private DataSource ds;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        
        
        String queryStrings = req.getQueryString();
        System.out.println(queryStrings);
        
        System.out.println("get method called");
        
        String title = req.getParameter("title");
        String gifUrl = req.getParameter("gifUrl");
        String username = req.getParameter("username");
        
        System.out.println(title + gifUrl + username);

        String SQL = "INSERT INTO gif (Title, Url, User) values(?,?,?) ";
        try (Connection conn = ds.getConnection()) {
            PreparedStatement ps = conn.prepareStatement(SQL);
            ps.setString(1, title);
            ps.setString(2, gifUrl);
            ps.setString(3, username);
            ps.executeUpdate();
            

        } catch (SQLException ex) {
            log(ex.getMessage());
            ex.printStackTrace();
            resp.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        
        

    }

}
