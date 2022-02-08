autowatch = 1;

function filter(instrument){

    switch (instrument) {
        case "violin_front":
                outlet(0, fc0(150), Q0(1.));
                outlet(0, fc1(306), Q1(1.));
                outlet(0, fc2(450), gain2(1.3) ,Q2(8.));
                outlet(0, fc3(1250), gain3(2) ,Q3(5.));
                outlet(0, fc4(7800), gain4(4) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

 	    	case "violin_back":
                outlet(0, fc0(150), Q0(1.));
                outlet(0, fc1(306) ,Q1(1.));
                outlet(0, fc2(412), gain2(1.3) ,Q2(8.));
                outlet(0, fc3(900), gain3(-70) ,Q3(95.));
                outlet(0, fc4(7800), gain4(4) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

            case "alto_front":
                outlet(0, fc0(150), Q0(1.));
                outlet(0, fc1(224), Q1(1.));
                outlet(0, fc2(370), gain2(6) ,Q2(3.));
                outlet(0, fc3(704), gain3(-6) ,Q3(6.));
                outlet(0, fc4(3720), gain4(3) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

			case "alto_back":
                outlet(0, fc0(150), Q0(1.));
                outlet(0, fc1(224),Q1(1.));
                outlet(0, fc2(335), gain2(6) ,Q2(5.));
                outlet(0, fc3(800), gain3(-6) ,Q3(6.));
                outlet(0, fc4(3720), gain4(3) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

			case "cello_front":
                outlet(0, fc0(80), Q0(1.));
                outlet(0, fc1(394) ,Q1(1.));
                outlet(0, fc2(150), gain2(3) ,Q2(4.));
                outlet(0, fc3(980), gain3(4) ,Q3(6.));
                outlet(0, fc4(3720), gain4(3) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

			case "cello_back":
                outlet(0, fc0(80), Q0(1.));
                outlet(0, fc1(394), Q1(90.));
                outlet(0, fc2(230), gain2(-12) ,Q2(64.));
                outlet(0, fc3(150), gain3(2) ,Q3(4.));
                outlet(0, fc4(809), gain4(5) ,Q4(6.));
				outlet(0, fc5(20000), Q5(1.));
            break;


            case "piano1":
                outlet(0, fc0(80), Q0(1.));
                outlet(0, fc1(394),Q1(90.));
                outlet(0, fc2(180), gain2(6) ,Q2(.5));
                outlet(0, fc3(1000), gain3(0) ,Q3(1.));
                outlet(0, fc4(10000), gain4(10) ,Q4(.6));
				outlet(0, fc5(20000), Q5(1.));
            break;

  			case "piano2":
                outlet(0, fc0(80), Q0(1.));
                outlet(0, fc1(394),Q1(1.));
                outlet(0, fc2(180), gain2(6) ,Q2(.5));
                outlet(0, fc3(1000), gain3(0) ,Q3(1.));
                outlet(0, fc4(10000), gain4(10) ,Q4(.6));
				outlet(0, fc5(20000), Q5(1.));
            break;

  			case "pianoSUB":
                outlet(0, fc0(30), Q0(1.));
                outlet(0, fc1(45), Q1(1.));
                outlet(0, fc2(50), gain2(-24) ,Q2(95.));
                outlet(0, fc3(1000), gain3(0) ,Q3(1.));
                outlet(0, fc4(3000), gain4(0) ,Q4(1.));
				outlet(0, fc5(100), Q5(1.));
            break;

            case "perc_TamTam":
                outlet(0, fc0(80), Q0(1.));
                outlet(0, fc1(394),Q1(95.));
                outlet(0, fc2(150), gain2(12) ,Q2(36.));
                outlet(0, fc3(84), gain3(-60) ,Q3(95.));
                outlet(0, fc4(3000), gain4(0) ,Q4(1.));
				outlet(0, fc5(20000), Q5(1.));
            break;

 			case "perc_Cassa":
                outlet(0, fc0(85),  Q0(1.));
                outlet(0, fc1(394), Q1(1.));
                outlet(0, fc2(394), gain2(0) ,Q2(1.));
                outlet(0, fc3(1000), gain3(0) ,Q3(2.));
                outlet(0, fc4(3000), gain4(0) ,Q4(2.));
				outlet(0, fc5(20000), gain4(0) ,Q4(1.));
            break;
    }
}

function fc0(x){ 
	fc = x; 
	outlet(0, "fc0", x);
	}
function Q0(x){ 
	Q = x ; 
	outlet(0, "Q0", x);
	}
	
function fc1(x){ 
	fc = x; 
	outlet(0, "fc1", x);
	}
function Q1(x){ 
	Q = x ; 
	outlet(0, "Q1", x);
	}


function fc2(x){ 
    fc = x; 
    outlet(0, "fc2", x);
    }
function Q2(x){ 
    Q = x ; 
    outlet(0, "Q2", x);
    }
function gain2(x){ 
    fc = x; 
    outlet(0, "gain2", x);
    }

function fc3(x){ 
    fc = x; 
    outlet(0, "fc3", x);
    }
function Q3(x){ 
    Q = x ; 
    outlet(0, "Q3", x);
    }
function gain3(x){ 
    fc = x; 
    outlet(0, "gain3", x);
    }

function fc4(x){ 
    fc = x; 
    outlet(0, "fc4", x);
    }
function Q4(x){ 
    Q = x ; 
    outlet(0, "Q4", x);
    }
function gain4(x){ 
    fc = x; 
    outlet(0, "gain4", x);
    }

function fc5(x){ 
    fc = x; 
    outlet(0, "fc5", x);
    }
function Q5(x){ 
    Q = x ; 
    outlet(0, "Q5", x);
    }
