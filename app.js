document.querySelector("button").addEventListener("click", () => {
  const lesson = document.querySelector("input[type='text']").value;
  const time = document.querySelector("input[type='time']").value;
  if (lesson && time) {
    alert(`درس "${lesson}" برای ساعت ${time} ثبت شد.`);
  } else {
    alert("لطفاً نام درس و زمان را وارد کنید.");
  }
});
