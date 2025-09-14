<?php
echo "<div>Hello, world!</div>";
echo "<div>woof</div>";
echo sprintf("<div> %d </div>",add(2, 3));
echo "<div>";
phpinfo();
echo "</div>";

function add($a, $b) {
    return $a + $b;
}