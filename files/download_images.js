var imageAnchorTagSelector = 'a.wXeWr.islib.nfEiy.mM5pbd',
  imageItems = document.querySelectorAll(imageAnchorTagSelector),
  imageUrlPrefix = '/imgres?imgurl=',
  imageUrlArray = [],
  hiddenAnchorElement = document.createElement('a'),
  imageUrls

imageItems.forEach((image)=>{
  var imageSourceLink, decodedImageSourceLink;

  try{
    image.click()
    imageSourceLink = image.attributes.href.nodeValue
    decodedImageSourceLink = decodeURIComponent(imageSourceLink.substring(imageUrlPrefix.length, imageSourceLink.indexOf('&')));

    imageUrlArray.push(decodedImageSourceLink);
  }
  catch (e) {
    console.error('Error occurred while getting image URL:: ', e)
  }
})

imageUrls = imageUrlArray.join('\n')
hiddenAnchorElement.href = 'data:attachment/text,' + encodeURI(imageUrls);
hiddenAnchorElement.target = '_blank';
hiddenAnchorElement.download = 'urls.txt';
hiddenAnchorElement.click();