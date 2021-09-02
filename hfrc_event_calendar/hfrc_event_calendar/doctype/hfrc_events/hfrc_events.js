// Copyright (c) 2021, ppcrc and contributors
// For license information, please see license.txt
var count=1;
frappe.ui.form.on('HFRC Events', {
	category: function (frm) {
		let category = frm.doc.category

		frm.set_query('sub_category', () => {
			return {
				"filters": {
					"category": category
				}
			}
		})
	},
	location: function (frm) {
		frm.toggle_display('other_location', frm.doc.location === 'Other')
	},
	onload_post_render: function (frm) {	
		$('[data-fieldname="image1"]').find('.attached-file-link').bind("DOMSubtreeModified", function() {
			let link1 = $('.attached-file-link').text();
			console.log(link1+"?v="+Date());
			console.log(".attached-file-link");
			frm.refresh_field("preview1");			
		});
	},
	add_photo: function(frm){
		if(count<5){
			count++;
			frm.toggle_display("image"+count,1);
			frm.toggle_display("preview"+count,1);
			if(count===5){
				frm.toggle_display('add_photo',0);
				frm.refresh_field("add_photo");
			}
			if(count===2){
				frm.toggle_display('remove_photo',1);
				frm.refresh_field("remove_photo");
			}
		}
		console.log(count);
	},
	remove_photo:function(frm){
		if(count>=2){
			console.log("deleted",count);
			frm.toggle_display("image"+count,0);
			frm.toggle_display("preview"+count,0);
			count--;
			if(count===1){
				frm.toggle_display('remove_photo',0);
				frm.refresh_field("remove_photo");
			}
			if(count===4){
				frm.toggle_display('add_photo',1);
				frm.refresh_field("add_photo");
			}
		}
		console.log(count);
	}
});