package com.knu.server.playbebe.recommend;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class getPlace {
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
        String url = "jdbc:mysql://dbinstance.csaqw2bfsjnj.ap-northeast-2.rds.amazonaws.com:3306/playbebe";
        String id = "admin";
        String pass = "dbinstance";
        conn = DriverManager.getConnection(url,id,pass);
    }

    public static void insertQuery() throws IOException {
        String curPath = System.getProperty("user.dir");
        String path = curPath + "/src/main/resources/static/fulldata_03_07_09_P.csv";
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(path),"euc-kr"));
        String line = null;
        br.readLine(); // 첫번째 줄 생략

        try{
            String query = "insert into place(cur_status,telephone,postal_code,address,road_name_address,establishment_name,coordinatex,coordinatey) values (?,?,?,?,?,?,?,?)";
            pstmt = conn.prepareStatement(query);

            while((line = br.readLine())!=null){
                String[] temp = line.split("\",\"");
                String curStatus = temp[8];
                String telephone = temp[15];
                String postalCode = temp[17];
                String address = temp[18];
                String roadNameAddress = temp[19];
                String establishmentName = temp[21];
                double coordinateX = 0;
                double coordinateY = 0;
                if (!temp[26].equals("")) coordinateX = Double.parseDouble(temp[26]);
                if (!temp[27].equals("")) coordinateY = Double.parseDouble(temp[27]);

                pstmt.setString(1,curStatus);
                pstmt.setString(2,telephone);
                pstmt.setString(3,postalCode);
                pstmt.setString(4,address);
                pstmt.setString(5,roadNameAddress);
                pstmt.setString(6,establishmentName);
                pstmt.setDouble(7,coordinateX);
                pstmt.setDouble(8,coordinateY);
                pstmt.executeUpdate();
                System.out.println("insert 성공!");
            }
        } catch(SQLException ee){
            System.err.println("error = " + ee.toString());
        }
    }

}