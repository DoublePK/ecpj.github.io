const formContent = document.querySelector('.form__content');
const formName = document.querySelector('.form__name');
const formAmount = document.querySelector('.form__amount');
const formBatch = document.querySelector('.form__batch');
const formDate = document.querySelector('.form__date');
const formSN= document.querySelector('.form__SN');


const checkContent = document.querySelector('.check__content');
const checkName = document.querySelector('.check__name');
const checkAmount = document.querySelector('.check__amount');
const checkBatch = document.querySelector('.check__batch');
const checkDate = document.querySelector('.check__date');
const checkSN = document.querySelector('.check__SN')


const EditBtn = document.querySelector('.check__button.Edit');
const SubmitBtn = document.querySelector('.check__button.Submit');

const voucher= document.querySelector('.voucher');
const voucherName = document.querySelector('.voucher__name');
const voucherAmount = document.querySelector('.voucher__amount');
const voucherSN = document.querySelector('.voucher__SN');
const voucherDate = document.querySelector('.voucher__date');

let Name, Amount, Batch, date, SerialNumber, Remark = '';

function displayCheck(e){
  e.preventDefault();
  formContent.style.display = 'none';
  checkContent.style.display = 'block';

  Name = formName.value;
  Amount = formAmount.value;
  Batch = formBatch.value;
  date = formDate.value;
  SerialNumber = formSN.value;
  
  checkName.innerHTML = Name;
  checkAmount.innerHTML = Amount + ' Ks';
  checkBatch.innerHTML = Batch;
  checkDate.innerHTML = date;
  checkSN.innerHTML = SerialNumber;

}

function displayForm(e){
  e.preventDefault();
  checkContent.style.display = 'none';
  formContent.style.display = 'block';  
}

function screenshot() {
  
  html2canvas(document.querySelector('.voucher')).then(function(canvas) {
      const modal = document.createElement('div');
      modal.className = 'modal';

      const modalContent = document.createElement('div');
      modalContent.className = 'modal__content';

      const modalImg = document.createElement('div');
      modalImg.className = 'modal__img';

      const modalBtn = document.createElement('button');
      modalBtn.className = 'modal__btn';
      modalBtn.innerText = 'Save Image';

      canvas.className = 'modal_canvas';
      canvas.removeAttribute('style');

      modalImg.appendChild(canvas);
      modalContent.appendChild(modalImg);
      modalContent.appendChild(modalBtn);
      modal.appendChild(modalContent);

      // modal.appendChild(canvas)
      document.body.appendChild(modal)
      modal.style.display = 'block';
  });
}

function voucherModal(voucher){
  console.log(voucher);
  
}

function displayVoucher(e){
  e.preventDefault();
  checkContent.style.display = 'none';
  voucher.style.display = 'block';
    voucherName.innerHTML = Name;
    voucherAmount.innerHTML = Amount;
    voucherDate.innerHTML = date;
    voucherSN.innerHTML = SerialNumber;
  let voc = screenshot();
  voucher.style.display = 'none';
  voucherModal(voc);
}

formContent.addEventListener('submit', displayCheck);

EditBtn.addEventListener('click', displayForm);

SubmitBtn.addEventListener('click', displayVoucher)

//displayVoucher();