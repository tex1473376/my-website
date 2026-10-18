// ดึงปุ่มบันทึกและปุ่มยกเลิกมาเก็บไว้ในตัวแปร
const btnSave = document.querySelector('.btn-submit1');
const btnCancel = document.querySelector('.btn-submit2');

// เมื่อกดปุ่ม "บันทึก" ให้แสดงข้อความแจ้งเตือน
btnSave.addEventListener('click', function() {
    alert('บันทึกข้อมูลเรียบร้อยแล้ว!');
});

// เมื่อกดปุ่ม "ยกเลิก" ให้แสดงข้อความแจ้งเตือน
btnCancel.addEventListener('click', function() {
    alert('ยกเลิกการรายการ!');
});0