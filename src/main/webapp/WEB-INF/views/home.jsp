<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/lession4.css">
</head>
<body>
    <div class="demo">
        <select name="" id="menu">
            <option value="Coffee">Coffee</option>
            <option value="Cacao">Cacao</option>
        </select>
        <p class="printMenu"></p>
        <input type="text" id="userName">
        <input type="text" oncopy="onCopy()" value="Try to copy this text">
        <p id="demo"></p>
        <br>
        <input type="text" id="num1" onkeyup="sum()"> <span>+</span> 
        <input type="text" id="num2" onkeyup="sum()"> <span>=</span>
        <input type="text" id="result">
    </div>
    <button id="changeColor">Change Color</button>
    <script src="js/lession4.js"></script>
</body>
</html>