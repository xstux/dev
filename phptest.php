<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Test</title>
    <link rel="stylesheet" href="css/menu.css">
    <script src="scripts/menu.js" defer></script>
</head>
<body>
<div class="header">

<div><h1 class="logo">xstux</h1></div>

<div><a href="index.html" class="link active">Home</a></div>

<div class="dropdown" data-dropdown>
    
    <button class="link" data-dropdown-button>Projects</button>
    <div class="dropdown-menu information-grid">

        <div>
            <div class="dropdown-heading">Web Pages</div>
            <div class="dropdown-links">
                <a href="ColorPicker.html" class="link">Color Picker</a>
                <a href="CSS - My Site/index.html" class="link">CSS - My Site</a>
                <a href="flowid.html" class="link">Flow ID Generator</a>
                <a href="game.html" class="link">Game / Canvas Test</a>
                <a href="menu.html" class="link">Menu Test</a>
                <a href="PayCalc.html" class="link">Pay Calc</a>
                <a href="phptest.php" class="link">PHP Test</a>
            </div>
        </div>

    </div>

</div> <!--dropdown1-->

<div class="dropdown" data-dropdown>
    
    <button class="link" data-dropdown-button>Other</button>
    <div class="dropdown-menu information-grid">

        <div>
            <div class="dropdown-heading">Social Media</div>
            <div class="dropdown-links">
                <a href="https://www.facebook.com" target="_blank" class="link"><img src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/facebook_circle_color-512.png" class="small-icon" alt="Facebook">Facebook</a>
                <a href="https://www.twitter.com"  target="_blank" class="link"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-256.png" class="small-icon" alt="Twitter">Twitter</a>
            </div>
        </div>
        <div>
            <div class="dropdown-heading">Music & Video</div>
            <div class="dropdown-links">
                <a href="https://www.spotify.com" target="_blank" class="link"><img src="https://cdn2.iconfinder.com/data/icons/social-micon/512/spotify-256.png" class="small-icon" alt="Spotify">Spotify</a>
                <a href="https://www.youtube.com" target="_blank" class="link"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/youtube-256.png" class="small-icon" alt="You Tube">YouTube</a>
            </div>
        </div>

    </div>

</div> <!--dropdown2-->



</div>




<div class="main-content">
    <h1>PHP Test</h1>
    
    <?php
    for ($a = 0; $a < 10; $a++)
    {
        print("The number is ".$a."<br>");

    }
    ?>


</div>
</body>
</html>


