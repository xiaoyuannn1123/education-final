document.addEventListener('DOMContentLoaded', function() {
	const tabs = document.querySelectorAll('.tab');
	const contents = document.querySelectorAll('.test1_b');
	tabs.forEach(tab => {
		tab.addEventListener('click', function() {
			tabs.forEach(t => t.classList.remove('active'));
			contents.forEach(c => c.style.display = 'none');
			const contentId = this.getAttribute('data-content');
			this.classList.add('active');
			document.getElementById(`content-${contentId}`).style.display = 'block';
		});
	});
	tabs[0].classList.add('active');
});

window.onload = function() {
	// 获取当前时间
	var now = new Date();

	// 格式化时间字符串
	var year = now.getFullYear();
	var month = String(now.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要+1
	var day = String(now.getDate()).padStart(2, '0');
	var hours = String(now.getHours()).padStart(2, '0');
	var minutes = String(now.getMinutes()).padStart(2, '0');
	var seconds = String(now.getSeconds()).padStart(2, '0');

	var formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

	// 显示提示框
	alert("欢迎进入学术与科学页面 " + formattedDate);
};