player_1= localStorage.getItem("player_1");
player_2= localStorage.getItem("player_2");

player_1_score = 0;
player_2_score=0;

document.getElementById("player_1").innerHTML= player_1+" : ";
document.getElementById("player_2").innerHTML= player_2+" : ";

document.getElementById("player_1_score").innerHTML= player_1_score;
document.getElementById("player_2_score").innerHTML= player_2_score;

document.getElementById("player_Q").innerHTML= "Question Turn: "+player_1;
document.getElementById("player_A").innerHTML= "Answer Turn: "+player_2;


function send(){
number_1= document.getElementById("n1").value;
number_2= document.getElementById("n2").value;
actual_ans= parseInt(number_1) * parseInt(number_2);

Qn= "<h4>"+ number_1+"X"+number_2+"</h4>";

input_box= "<br> Answer : <input type='number'id='check_input_box'>";

check_button= "<br><br> <button class='btn btn-info'onclick='check()'>Check</button>";

row= Qn+input_box+check_button;

document.getElementById("output").innerHTML=row;

number_1= document.getElementById("n1").value="";
number_1= document.getElementById("n2").value="";

}


Q_turn= player_1;
A_turn= player_2;

function check(){
    get_answer= document.getElementById("check_input_box").value;
        console.log(get_answer);
    
        if (get_answer == actual_ans){
    
            if(A_turn == player_1){
                player_1_score= player_1_score + 1;
                document.getElementById("player_1_score").innerHTML=player_1_score;
            }
    
            else {
                player_2_score= player_2_score + 1;
                document.getElementById("player_2_score").innerHTML= player_2_score;
        }
    }

    if(Q_turn == player_1){
        Q_turn == player_2;
    document.getElementById("player_Q").innerHTML= "Question Turn - "+player_2;
    }

    if(A_turn == player_1){
        A_turn== player_2;
    document.getElementById("player_A").innerHTML= "Answer Turn - "+player_2;
    }

    else {
        A_turn == player_1;
    document.getElementById("player_A").innerHTML= "Answer Turn - "+player_1;
        }
        document.getElementById("output").innerHTML="";


}