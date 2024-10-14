/**
 * 
 */

//const f = document["join"];

const regID = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z]){4,13}$/;

const regPW = /^[A-Za-z\d@#$%^&*()\-_=+{};:,<.>/?[\]\\|~`!]{4,13}$/;

const regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const regPhnNum = /^(010|011|017|018|019)/;

const ID = document.getElementById("userid");
const pw = document.getElementById("pw");
const pw_check = document.getElementById("pw_check");


const phonenum1 = document.getElementById("phonenum1");



const email = document.getElementById("email");

const validate = () => {

	if (!regID.test(ID.value)) {
		window.alert("ID를 잘못 넣음")
		return false;
	}
	else if ((!regPW.test(pw.value)) || (pw.value !== pw_check.value)) {
		window.alert("비밀번호를 잘못 넣음")
		return false;
	}
	else if (!regEmail.test(email.value)) {
		window.alert("이메일을 잘못 넣음")
		return false;
	}
	else if (!regPhnNum.test(phonenum1.value)) {
		window.alert("전화번호를 잘못 넣음")
		return false;
	}
	return true;

};










































