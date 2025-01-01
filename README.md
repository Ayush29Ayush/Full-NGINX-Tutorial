## Useful Commands

##### start nginx
`nginx`

##### version of nginx
`nginx -v`

##### version and other configure options of nginx
`nginx -V`

##### get options
`nginx -h`

##### restart nginx
`sudo nginx -s reload`

##### stop nginx
`sudo nginx -s stop`  

##### restart nginx
`sudo nginx -s reload`

##### create folder for nginx certificates
`mkdir my-self-signed-nginx-certificates`
`cd my-self-signed-nginx-certificates`

##### create self-signed certificate
`openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt`