// Copyright (c) 2021, ppcrc and contributors
// For license information, please see license.txt

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
		// var count=0;
		// console.log("Image Added");
		// console.log(++count);
		// console.log($('[data-fieldname="image"] > .form-clickable-section > .flex > .grid-buttons > .grid-add-row').text());
		// $('[data-fieldname="image"] > .form-clickable-section > .flex > .grid-buttons > .grid-add-row').hide();
		// testing done
	}
});