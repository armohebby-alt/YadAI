document.querySelector("button").addEventListener("click", () => {
  const lesson = document.querySelector("input[type='text']").value;
  const time = document.querySelector("input[type='time']").value;

  if (lesson && time) {
    const list = document.getElementById("lessonList");
    const item = document.createElement("li");
    item.textContent = `درس "${lesson}" برای ${time} ثبت شد.`;
    list.appendChild(item);
  } else {
    alert("لطفاً نام درس و زمان را وارد کنید.");
  }
});
