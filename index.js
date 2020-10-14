// Generate random numbers in range of 1-6
let player_one_num = Math.floor(Math.random() * 6) + 1;
let player_two_num = Math.floor(Math.random() * 6) + 1;

// Write image file paths
img1_src = "./images/dice" + player_one_num + ".png";
img2_src = "./images/dice" + player_two_num + ".png";

// Get the DOM objects for h1 and image tags of both players
header_msg_tag = document.querySelector(".container h1");
player1_img_src_tag = document.querySelector(".img1");
player2_img_src_tag = document.querySelector(".img2");

// Change the h1 tag
if (player_one_num == player_two_num){
    header_msg_tag.innerHTML = "Draw!";
} else if (player_one_num > player_two_num) {
    header_msg_tag.innerHTML = "Player 1 Wins!";
} else {
    header_msg_tag.innerHTML = "Player 2 Wins!";
}

// Change the images
player1_img_src_tag.setAttribute("src", img1_src);
player2_img_src_tag.setAttribute("src", img2_src);