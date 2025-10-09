document.addEventListener("DOMContentLoaded", function() {
  const sidebarItems = document.querySelectorAll("nav div");

  sidebarItems.forEach((item) => {
    const text = item.innerText.trim();

    item.addEventListener("click", () => {
      switch (text) {
        case "Bảng Điều Khiển":
          window.location.href = "admin.html";
          break;
        case "Lịch Chiếu":
          window.location.href = "lichchieu.html";
          break;
        case "Phim":
          window.location.href = "phim.html";
          break;
        case "Khách Hàng":
          window.location.href = "khachhang.html";
          break;
        case "Giao Dịch":
          window.location.href = "giaodich.html";
          break;
        case "Cài Đặt":
          window.location.href = "caidat.html";
          break;
        default:
          console.log("Không có trang tương ứng cho:", text);
      }
    });
  });
});
