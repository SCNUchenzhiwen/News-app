var express = require('express');
var app = express();

var multipart = require('connect-multiparty');
var fs = require('fs');
var multipartMiddleware = multipart();

var server = app.listen(8088, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Ӧ��ʵ�������ʵ�ַΪ", host, port)
})
//------------------------------------------------------
//�����������
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    //res.header("Content-Type", "application/json;charset=utf-8");//-------------------------------------����涨�˱��뷵��json��ʽ����Ӧ------------------------------
    next();
});

//�����û�������Ϣ
app.post('/upload', multipartMiddleware,function(req, res, next){
    console.log("he");
	var profile_image = req.files.file;
     var tmp_path = profile_image.path;  //�˴�Ϊҳ��ͼƬ��ŵĵ�ַ����C�̵���ʱ�ļ���temp�¡�   
     console.log(req.files);
	var path = './' + profile_image.name;  //�˴�'./url'Ϊ�ϴ���ͼƬϣ����ŵĵ�ַ.����Ϊ���Ե�ַ
	//���򴫵��ļ�
            var is = fs.createReadStream(tmp_path);
            var os = fs.createWriteStream(path);
                is.pipe(os);
                is.on('end',function() {
			console.log("end");
                    fs.unlinkSync(tmp_path);
res.send("done");
                });
})

//�����û�������Ϣ
app.get('/msg',function(req, res){
	
    console.log("getmsg");
	res.send("msg");
})
