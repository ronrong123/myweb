<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>
            <%
        String sex = request.getParameter("sex");
        String year = request.getParameter("year");
        String[] subject = request.getParameterValues("subject");
    %>
                <!-- 값이 여러개인 경우 배열을 쓰고 Parameter뒤에 Values추가 -->

                <h1>성별:
                    <%=sex%></h1>
                <h1>학년:
                    <%=year%></h1>
                <%
    for(String sbj : subject){
    %>
                    <h3><%=sbj%></h3>
                <%
        }
    %>
            </body>

        </html>