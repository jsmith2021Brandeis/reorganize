#### Furniture Friends Data Pipeline

Jacob Smith, WHACK 2019

My project was to implement the data input of furniture, so users could quickly and easily inventory their donated items.  The technical challenge here is that our platform needs data assembly on the fly for donated items, so we can't use some pre-maintained inventory.

The main workflow is to use the existing plum app, to take a picture with included measurements. Then, that app is texted to Twilio. (Saving the image from Twilio is manual I tried javascript and Java programs to do this). I crop the image in command line, and perform Optical text recognition to get the dimensions of the image. 

 ![Gif of video demonstration ](/home/major-league-hacking/Prototype Pipeline/images/PipeLineDemo.gif)

Finally, the images can be used to sketch a room layout in javascript:

![Layout of table and chairs](images/Layout.png)



### Reflection

​	In addition to having fun with some peers, I learned a lot about front end and web programming. We started out with this [reorganize API](https://github.com/amfeng/reorganize). I learned how to run it at all, then set about systematically disassembling it until I understood some basics of javscript, like how html files submit to html requests. I also can at least run a mongodb website.

​	The Twilio process was easy to get started, but I couldn't find a way to automatically download the images. Also, I think I got caught up in front end development, next time when I develop an algorithm I will show it works in my most comfortable language, and worry about interfacing later. 

### **Links**

Cropping Image: https://www.youtube.com/watch?v=APD4hvS0amQ
Magic Photo Interface: http://www.imagemagick.org/Usage/crop/#crop

### **Code Samples**

Crop: `convert measurMentBottom.jpg -crop 200x200-50+650 crop2.jpg`
`Optical Text Recognition:  tesseract crop2.jpg test`

Send Text Twilio: `curl 'https://api.twilio.com/2010-04-01/Accounts/ACcab3c7ce1d3e0cdeddecab04bd0a1681/Messages.json' -X POST \`
`--data-urlencode 'To=4436102977' \`
`--data-urlencode 'From=+17014016436' \`
`--data-urlencode 'Body=Phil Bethesrsenton' \`
`-u ACcab3c7ce1d3e0cdeddecab04bd0a1681:auth`

Twilio auto respond : https://www.twilio.com/docs/studio/tutorials/how-to-set-up-auto-responder

Twilio image download : https://github.com/TwilioDevEd/download-mms-java/blob/master/src/main/java/com/twilio/app/App.java
