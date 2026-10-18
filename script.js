// ดึง Element ต่างๆ มาเก็บไว้ในตัวแปร
const btnSave = document.querySelector('.btn-submit1');
const btnCancel = document.querySelector('.btn-submit2');
const nameInput = document.querySelector('#nameInput');
const resultDiv = document.querySelector('#result');

// เมื่อกดปุ่ม "บันทึก"
btnSave.addEventListener('click', function() {
    const enteredName = nameInput.value; // ดึงข้อความที่พิมพ์ในช่อง input
    
    if (enteredName.trim() === "") {
        alert('กรุณากรอกข้อมูลก่อนบันทึก!');
    } else {
        // แสดงข้อความต้อนรับหรือข้อมูลที่บันทึกลงในหน้าเว็บทันที
        resultDiv.textContent = 'บันทึกข้อมูลสำเร็จ: สวัสดีคุณ ' + enteredName;
        alert('บันทึกข้อมูลเรียบร้อยแล้ว!');
    }
});

// เมื่อกดปุ่ม "ยกเลิก" (เคลียร์ข้อมูลในช่องกรอก)
btnCancel.addEventListener('click', function() {
    nameInput.value = "";
    resultDiv.textContent = "";
    alert('ยกเลิกการทำรายการ!');
});