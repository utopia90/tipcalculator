class CalculateTip{
    constructor(){
        this.submitBtn = document.getElementById("submit-btn");
        this.billValue = document.getElementById("billamount");
        this.serviceValoration = document.getElementById("service-valoration");
        this.peopleSharing = document.getElementById("people-number");
        this.totalTip = 0;
        this.displayTip = document.getElementById("display-tip");
    }

    calculateAmount(){
        this.billAmount = this.billValue.value;
        this.serviceValorationNum = this.serviceValoration.value;
        this.peopleSharingNum = this.peopleSharing.value;
        this.calculate1 = this.billAmount*this.serviceValorationNum/100;
        this.totalTip = this.calculate1/this.peopleSharingNum;

        this.displayTip.innerText= `Each person should pay ${this.totalTip} $`;

    }

}








function ready(){
    let submitBtn = document.getElementById("submit-btn");
    let ct = new CalculateTip();

    submitBtn.addEventListener('click', () => {
        ct.calculateAmount();
    })

}





if(document.readyState == "loading") {
    document.addEventListener('DOMContentLoaded', ready);
}else {
    ready();
}
