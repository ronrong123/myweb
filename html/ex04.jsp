<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <%
        String userId = request.getParameter("user_id");
        String date = request.getParameter("date");
        String sex = request.getParameter("sex");
        String email = request.getParameter("email");
        String emailselect = request.getParameter("emailselect");
        String job = request.getParameter("job");
        String[] phone = request.getParameterValues("phone");
        String[] subject = request.getParameterValues("subject");
        String textarea = request.getParameter("textarea");
    %>
    <h1>아이디: <%=userId%></h1>
    <h1>생년월일: <%=date%></h1>
    <h1>성별: <%=sex%></h1>
    <h1>E-mail: <%=email%></h1>
    <h1>메일수신: <%=emailselect%></h1>
   <p style="font-size:30px;font-weight: 900;"> 번호:<%for(String p:phone){%>
    <span><%=p%></span>
    <%}%></p>
    <h1>직업: <%=job%></h1>
    <p style="font-size:30px;font-weight: 900;">취미: <%for(String sbj:subject){%>
         <span><%=sbj%> | </span>
        <%}%></p>
    <h1>자기소개: <%=textarea%></h1>
    
</body>
</html>