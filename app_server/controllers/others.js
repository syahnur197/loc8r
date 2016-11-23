
/* GET 'about' page */
module.exports.about = function(req, res, next) {
	res.render('generic-text', { 
		title: 'About',
		content: 'Loc8r was created to help people find place to sit down and a get a bit of work done. \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lobortis lectus nec orci semper, blandit laoreet velit hendrerit. Mauris posuere lectus sed leo viverra, sed faucibus elit pharetra. Etiam condimentum felis tincidunt lacus cursus hendrerit. In vel tortor libero. In eget sapien mauris. Curabitur nec leo lorem. Cras suscipit nec lacus id consectetur. Vivamus in eleifend tortor, vitae malesuada ipsum. Aliquam a volutpat purus. Aenean luctus id mi eget varius.\n\nCurabitur urna mauris, accumsan ullamcorper nisl id, ultrices eleifend nunc. Cras nisl risus, gravida cursus porttitor et, mollis sit amet magna. Nullam tincidunt urna eu libero pulvinar finibus id et metus. Fusce porttitor diam volutpat, semper metus sit amet, ullamcorper enim. Aliquam sed magna diam. Praesent nec magna elementum, semper nibh non, dictum nibh. Morbi erat velit, consectetur sit amet ultricies pharetra, faucibus in nibh. Aenean ultrices eu leo consectetur aliquam. Fusce molestie tortor sodales, dictum ante ac, pharetra leo. Phasellus eleifend orci vitae ante porttitor bibendum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ante purus, accumsan faucibus varius sit amet, fermentum ac tellus. Maecenas tempor est sed lacinia dignissim. In pretium lobortis rhoncus. Curabitur cursus odio eu sapien accumsan venenatis. Fusce consectetur orci sit amet turpis suscipit, ullamcorper faucibus nulla fermentum.'
	});
}

