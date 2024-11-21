function citiess(){
    const state=document.getElementById("state").value;
    const cityselect=document.getElementById("city");
    cityselect.innerHTML='<option value="">Select City</option>';
    let cities=[];
    if(state==="Andhra Pradesh"){
        cities=["Visakhapatnam","Vijayawada","Guntur","Nellore","Kurnool","Kakinada","Rajamahendravaram","Kadapa","Mangalagiri-Tadepalli","Tirupati","Anantapuram","Ongole","Vizianagaram","Eluru","Proddatur","Nandyal","Adoni","Madanapalle","Machilipatnam","Tenali","Chittoor","Hindupur","Srikakulam","Bhimavaram","Tadepalligudem","Guntakal","Dharmavaram","Gudivada","Narasaraopet","Kadiri","Tadipatri","Chilakuripet"];
    }
    else if(state==="Arunachal Pradesh"){
        cities=["Bordumsa","Bubang","Changlang","Chopelling","Deban","Dharampur","Gandhigram","Jairampur","Kharsang","Khemiyong","Kherem Bisa","Kutum","Lallung","Manabhum","Manmao","Miao","Namchik","Namdang","Namphai","Nampong","Namtok","New Kamlao","New Mohang","Rajanagar","Rangfrah","Ranglom","Two-hat","Vijaynagar","Vijoypur","Yangkang"];
    }
    else if(state==="Assam"){
        cities=["Udalguri","Karimganj","Cachar","Kamrup","Kamrup Metro","Karbi Anglong","Kokrajhar","Golaghat","Goalpara","Chirang","Dibrugarh","Dima Hasao","Tinsukia","Darrang","Dhubri","Dhemaji","Nagaon","Nalbari","Bongaigaon","Barpeta","Baksa","Morigaon","Jorhat","Lakhimpur","Sivasagar","sonitpur","Hailakandi"]
    }
    else if(state==="Bihar"){
        cities=["Patna","Gaya","Bhagalpur","Muzaffarpur","Purnia","Darbhanga","Bihar Sharif","Sasaram","Arrah","Samastipur"];
    }
    else if(state==="Chhattisgarh"){
        cities=["Raipur","Durg","Bilaspur","Bastar","Rajnandgaon","Raigarh","Korba","Surguja","Manendragarh-Chirmiri-Bharatpur","Dhamtari","Mahasamund"];
    }
    else if(state==="Goa"){
        cities=["Bicholim","Canacona","Cuncolim","Curchorem","Mapusa","Margao","Mormugao","Panaji","Pernem","Ponda","Quepem","Sanguem","Sanquelim","Valpoi"];
    }
    else if(state==="Gujarat"){
        cities=["Ahmedabad","Surat","Vadodara","Rajkot","Bhavnagar","Jamnagar","Gandhinagar","Junagadh","Gandhidham","Anand","Navsari","Morbi","Nadiad","Surendranagar","Mehsana","Porbandar","Vapi","Bharuch","Palanpur","Bhuj","Valsad","Gondal","Veraval","Godhra","Patan","Kalol","Botad","Amreli","Deesa","Jetpur"];
    }
    else if(state==="Haryana"){
        cities=["Ambala","Bahadurgarh","Bhiwani","Faridabad","Gurugram","Hisar","Jind","Kaithal","Karnal","Narnaul","Palwal","Panchkula","Panipat","Rewari","Rohtak","Sirsa","Sonipat","Thanesar","Yamunanagar"];
    }
    else if(state==="Jharkhand"){
        cities=["Adityapur","Bokaro Steel City","Chaibasa","Chirkunda","Deoghar","Dhanbad","Dumka","Giridih","Hazaribagh","Jamshedpur","Jhumri Telaiya","Medininagar","Phusro","Ramgarh","Ranchi","Sahibganj"];
    }
    else if(state==="Karnataka"){
        cities=["Bagalkot","Ballari","Belagavi","Bengaluru","Bhadravati","Bidar","Chikmagalur","Chitradurga","Davanagere","Gadag-Betageri","Gangavati","Hassan","Hospet","Hubballi-Dharwad","Kalaburagi","Kolar","Mandya","Mangalore","Mysore","Raichur","Robertsonpet","Shimoga","Tumkur","Udupi","Vijayapura"];
    }
    else if(state==="Kerala"){
        cities=["Alappuzha","Kannur","Kochi","Kollam","Kozhikode","Kottayam","Malappuram","Palakkad","Thiruvananthapuram","Thrissur"];
    }
    else if(state==="Madhya Pradesh"){
        cities=["Ashoknagar","Balaghat","Betul","Bhind","Bhopal","Burhanpur","Chhatarpur","Chhindwara","Damoh","Datia","Dewas","Dhar","Guna","Gwalior","Hoshangabad","Indore","Itarsi","Jabalpur","Katni","Khandwa","Khargone","Mandsaur","Morena","Nagda","Neemuch","Pithampur","Ratlam","Rewa","Sagar","Satna","Sehore","Seoni","Shahdol","Shivpuri","Singrauli","Tikamgarh","Ujjain","Vidisha"];
    }
    else if(state==="Maharastra"){
        cities=["Ahmednagar","Akola","Amravati","Aurangabad","Baramati","Beed","Bhiwandi","Chandrapur","Dhule","Jalgaon","Jalna","Kalyan-Dombivli","Kolhapur","Latur","Malegaon","Mumbai","Nagpur","Nanded","Nashik","Navi Mumbai","Panvel","Parbhani","Pune","Sangli","Satara","Solapur","Thane","Ulhasnagar","Vasai-Virar","Wardha","Yavatmal"];
    }
    else if(state==="Manipur"){
        cities=["Bishnupur","Chandel","Churachandpur","Imphal East","Imphal West","Senapati","Tamenglong","Thoubal","Ukhrul"];
    }
    else if(state==="Meghalaya"){
        cities=["Baghmara","Cherrapunji","Jowai","Khliehriat","Mairang","Mawkyrwat","Nongpoh","Nongstoin","Resubelpara","Shillong","Tura","Williamnagar"];
    }
    else if(state==="Mizoram"){
        cities=["Aizawl","Champhai","Hnahthial","Khawzawl","Kolasib","Lawngtlai","Lunglei","Mamit","Saiha","Saitual","Serchhip"];
    }
    else if(state==="Nagaland"){
        cities=["Chümoukedima","Dimapur","Kiphire","Kohima","Longleng","Mokokchung","Mon","Niuland","Noklak","Peren","Phek","Shamator","Tuensang","Tseminyü","Wokha","Zunheboto"];
    }
    else if(state==="Odisha"){
        cities=["Angul","Balangir","Balasore","Baripada","Berhampur","Bhadrak","Bhubaneswar","Cuttack","Dhenkanal","Jajpur","Jeypore","Jharsuguda","Kendrapara","Keonjhar","Khordha","Koraput","Malkangiri","Nayagarh","Puri","Rayagada","Rourkela","Sambalpur","Sundargarh"];
    }
    else if(state==="Punjab"){
        cities=["Abohar","Amritsar","Barnala","Batala","Bathinda","Faridkot","Firozpur","Gurdaspur","Hoshiarpur","Jalandhar","Kapurthala","Ludhiana","Moga","Mohali","Muktsar","Pathankot","Patiala","Phagwara","Rajpura","Sangrur"];
    }
    else if(state==="Rajasthan"){
        cities=["Ajmer","Alwar","Banswara","Baran","Barmer","Bharatpur","Bhilwara","Bikaner","Bundi","Chittorgarh","Churu","Dausa","Dhaulpur","Dungarpur","Hanumangarh","Jaipur","Jaisalmer","Jalore","Jhalawar","Jhunjhunu","Jodhpur","Karauli","Kota","Nagaur","Pali","Pratapgarh","Rajsamand","Sawai Madhopur","Sikar","Sirohi","Sri Ganganagar","Tonk","Udaipur"];
    }
    else if(state==="Sikkim"){
        cities=["Gangtok","Gyalshing","Jorethang","Mangan","Namchi","Pakyong","Rangpo","Singtam"];
    }
    else if(state==="Tamil Nadu"){
        cities=["Ambattur","Avadi","Chennai","Coimbatore","Cuddalore","Dindigul","Erode","Hosur","Kanchipuram","Karaikkudi",     "Kumbakonam","Madurai","Nagapattinam","Nagercoil","Neyveli","Pallavaram","Pudukkottai","Rajapalayam","Salem","Tambaram",    "Thanjavur","Thoothukudi","Tiruchirappalli","Tirunelveli","Tiruppur","Tiruvannamalai","Tiruvottiyur","Vellore"];
    }
    else if(state==="Telangana"){
        cities=["Adilabad","Bhadradri","Kothagudem","Hanumakonda","Hyderabad","Jagtial","Jangaon","Jayashankar Bhupalpally","Jogulamba Gadwal","Kamareddy","Karimnagar","Khammam","Kumuram Bheem","Mahabubabad","Mahabubnagar","Mancherial","Medak","Medchal-Malkajgiri","Mulugu","Nagarkurnool","Nalgonda","Narayanpet","Nirmal","Nizamabad","Peddapalli","Rajanna Sircilla","Rangareddy","Sangareddy","Siddipet","Suryapet","Vikarabad","Wanaparthy","Warangal","Yadadri Bhuvanagiri"];
    }
    else if(state==="Tripura"){
        cities=["Agartala","Ambassa","Amarpur","Belonia","Bishalgarh","Dharmanagar","Jirania","Kailashahar","Kamalpur","Khowai","Kumarghat","Melaghar","Mohanpur","Panisagar","Ranirbazar","Sabroom","Santirbazar","Sonamura","Teliamura","Udaipur"];
    }
    else if(state==="Uttar Pradesh"){
        cities=["Agra","Aligarh","Allahabad (Prayagraj)","Ambedkar Nagar","Amroha","Ayodhya","Azamgarh","Badaun","Bahraich","Ballia","Banda","Barabanki","Bareilly","Basti","Bijnor","Bulandshahr","Chandauli","Chitrakoot","Deoria","Etah","Etawah","Farrukhabad","Fatehpur","Firozabad","Gautam Buddha Nagar (Noida)","Ghaziabad","Ghazipur","Gonda","Gorakhpur","Hamirpur","Hardoi","Hathras","Jaunpur","Jhansi","Kannauj","Kanpur","Kasganj","Kaushambi","Kushinagar","Lakhimpur Kheri","Lalitpur","Lucknow","Maharajganj","Mahoba","Mainpuri","Mathura","Mau","Meerut","Mirzapur","Moradabad","Muzaffarnagar","Pilibhit","Pratapgarh","Raebareli","Rampur","Saharanpur","Sambhal","Sant Kabir Nagar","Shahjahanpur","Shamli","Shravasti","Siddharthnagar","Sitapur","Sonbhadra","Sultanpur","Unnao","Varanasi"];
    }
    else if(state==="Uttarakhand"){
        cities=["Almora","Dehradun","Haldwani","Haridwar","Jyotirmath","Kashipur","Khatima","Kotdwar","Mussoorie","Nainital","Pantnagar","Pauri","Purola","Ramnagar","Ranikhet","Rishikesh","Roorkee","Srinagar Garhwal","Uttarkashi","Vikas Nagar"];
    }
    else if(state==="West Bengal"){
        cities=["Alipurduar","Asansol","Baharampur","Balurghat","Bankura","Bardhaman","Basirhat","Bhatpara","Bishnupur","Bolpur","Chandannagar","Darjeeling","Durgapur","Haldia","Howrah","Jalpaiguri","Kharagpur","Kolkata","Krishnanagar","Malda","Medinipur","Purulia","Raiganj","Ranaghat","Shantipur","Siliguri"];
    }
    cities.forEach(city=>{
        const option=document.createElement("option");
        option.value=city;
        option.text=city;
        cityselect.appendChild(option);
    });
}
function validateForm(){
    var x=document.forms["myForm"]["sname"].value;
    var y=document.forms["myForm"]["rno"].value;
    var z=document.forms["myForm"]["year"].value;
    var l=document.forms["myForm"]["dept"].value;
    var m=document.forms["myForm"]["section"].value;
    var n=document.forms["myForm"]["pno"].value;
    var k=document.forms["myForm"]["gmail"].value;
    var q=document.forms["myForm"]["country"].value;
    var p=document.forms["myForm"]["state"].value;
    var i=document.forms["myForm"]["city"].value;
    var j=document.forms["myForm"]["zip"].value;
    var w=document.forms["myForm"]["add"].value;


    if(x==""||x==null&&y==""||y==null&&z==""||z==null&&l==""||l==null&&m==""||m==null&&n==""||n==null&&k==""||k==null&&q==""||q==null&&p==""||p==null&&i==""||i==null&&j==""||j==null&&w==""||w==null){
        alert("All the field must be filled");
        return false;
    }
    /*var y=document.forms["myForm"]["rno"].value;
    if(y==""||y==null){
        alert("Roll no must be filled out");
        return false;
    }
    var z=document.forms["myForm"]["year"].value;
    if(z==""||z==null){
        alert("Year must be selected");
        return false;
    }
    var l=document.forms["myForm"]["dept"].value;
    if(l==""||l==null){
        alert("Department must be selected");
        return false;
    }
    var m=document.forms["myForm"]["section"].value;
    if(m==""||m==null){
        alert("Section must be filled");
        return false;
    }
    var n=document.forms["myForm"]["pno"].value;
    if(n==""||n==null){
        alert("Phone number must be filled");
        return false;
    }
    var k=document.forms["myForm"]["gmail"].value;
    if(k==""||k==null){
        alert("Email must be filled");
        return false;
    }
    var q=document.forms["myForm"]["country"].value;
    if(q==""||q==null){
        alert("Country must be filled");
        return false;
    }
    var p=document.forms["myForm"]["state"].value;
    if(p==""||p==null){
        alert("State must be selected");
        return false;
    }
    var i=document.forms["myForm"]["city"].value;
    if(i==""||i==null){
        alert("City must be selected");
        return false;
    }
    var j=document.forms["myForm"]["zip"].value;
    if(j==""||j==null){
        alert("Pincode must be filled");
        return false;
    }
    var w=document.forms["myForm"]["add"].value;
    if(w==""||w==null){
        alert("Address must be filled");
        return false;
    }*/

}
function valid(){
    var pwd=document.getElementById("pwd");
    var cpwd=document.getElementById("cpwd");
    if(pwd.value==cpwd.value){
        return;
    }
    else{
        alert("Password doesn't match");
    }
}
/*
function validchar(){
    var password=document.getElementById("pwd").value,
    error=[];
    if(password.length<8){
        error.push("Your password must contain 8 characters");
    }
    if(password.search(/[a-z]/g)){
        error.push("Your password must contain one lowercase letter");
    }
    if(password.search(/[A-Z]/g)){
        error.push("Your password must contain one uppercase letter");
    }
    if(password.search(/[0-9]/)){
        error.push("Your password must contain one number");
    }
    if(error.length>0){
        alert(error.join("\n"));
        return false;
    }
    return true;
}*/
function validchar(){
    var re=document.getElementById("pwd");
    if(re.value.length>8){
        alert("The password should not exceed 8 characters");
    }
}