describe('helpers tests with setups and tear-downs', function(){
    beforeEach(function(){
        tipAmtInput.value = 40;
        billAmtInput.value = 100;
        submitPaymentInfo();
    });
    describe('should properly sum total from allPayments', function(){
        it('should sum total tip amount', function(){
            expect(sumPaymentTotal('tipAmt')).toEqual(40);
        });
        it('should sum total bill amount', function(){
            expect(sumPaymentTotal('billAmt')).toEqual(100);

            billAmtInput.value = 300;
            submitPaymentInfo();

            expect(sumPaymentTotal('billAmt')).toEqual(400);
        });
    });

    it('should sum total tip percent', function(){
        expect(calculateTipPercent(100, 40)).toEqual(40);

        expect(calculateTipPercent(200, 40)).toEqual(40);
    });


    it('should append a newly created td', function(){
        let newTr = document.createElement('tr');

        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.children.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr, type)', function () {
        let newTr = document.createElement('tr');
    
        appendDeleteBtn(newTr);
    
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
      });

    afterEach(function(){
        tipAmtInput.value = '';
        billAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});