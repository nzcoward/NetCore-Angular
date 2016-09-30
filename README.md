# NetCore-Angular

An ASP.Net Core app that runs Angular 2.0.1 out of the box. Literally. The npm install command has been run to move everything you need into the wwwroot.

Just clone, let VS restore the packages, and hit F5 to see it work.

##The future

I will be making changes to the task files, etc. to tidy them up somewhat, and to build some HTML templates for some various components, but this template will always run without you, the cloner, messing about with config.

##Behind a workplace proxy?

You may need to set your NPM proxy to restore packages:

```
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

Also, copy the .typingsrc file from the Additional folder into c:\users\youraccountname and modify it to have your proxy address where it tells you, and you're away. This will only be required if you 
