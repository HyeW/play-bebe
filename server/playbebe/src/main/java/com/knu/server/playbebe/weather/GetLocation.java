package com.knu.server.playbebe.weather;
import java.io.*;
import java.sql.*;

public class GetLocation {
    public static PreparedStatement pstmt;
    public static Connection conn;

    public static void main(String[] args) throws IOException, SQLException {
        JdbcConnect();
        getConnection();
        insertQuery();
    }
    public static void JdbcConnect(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            System.out.println("OK!");

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
            System.exit(0);
        }
    }
    public static void getConnection() throws SQLException {
        String url = new PersonalInfo().getUrl();
        String id = new PersonalInfo().getId();
        String pass = new PersonalInfo().getPassword();
        conn = DriverManager.getConnection(url,id,pass);
        System.out.println("connection" + conn);
    }
    public static void insertQuery() throws IOException {
        String path = "C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/location.csv";
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(path),"UTF-8"));
        String line = null;
        br.readLine(); // 첫번째 줄 생략
        try{
            String query = "insert into location(phase1,phase2,phase3,X,Y) values (?,?,?,?,?)";
            pstmt = conn.prepareStatement(query);
            while((line = br.readLine())!=null){
                String[] tmp = line.split(",");
                String phase1 = tmp[2];
                String phase2 = tmp[3];
                String phase3 = tmp[4];
                int X = Integer.parseInt(tmp[5]);
                int Y = Integer.parseInt(tmp[6]);
                pstmt.setString(1,phase1);
                pstmt.setString(2,phase2);
                pstmt.setString(3,phase3);
                pstmt.setInt(4,X);
                pstmt.setInt(5,Y);
                pstmt.executeUpdate();
                System.out.println("insert 성공!");
            }
        } catch(SQLException ee){
            System.err.println("error = " + ee.toString());
        }
    }

}