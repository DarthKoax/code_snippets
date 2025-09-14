FROM alpine:latest
RUN apk update && apk upgrade
RUN apk --no-cache add apache2 php php-apache2 php-fpm php-xdebug

# Configure Apache for webroot at /app
RUN sed -i 's|DocumentRoot "/var/www/localhost/htdocs"|DocumentRoot "/var/www/html/app"|g' /etc/apache2/httpd.conf
RUN sed -i 's|Directory "/var/www/localhost/htdocs"|Directory "/var/www/html/app"|g' /etc/apache2/httpd.conf


RUN touch /tmp/xdebug.log
# # Configure Xdebug
RUN echo "zend_extension=/usr/lib/php83/modules/xdebug.so" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.mode=debug" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.start_with_request=yes" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.client_port=9003" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.client_host=host.docker.internal" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.log=/tmp/xdebug.log" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.log_level=7" >> /etc/php83/conf.d/50_xdebug.ini \
    && echo "xdebug.idekey='VSCODE'" >> /etc/php83/conf.d/50_xdebug.ini
    
    
# Start Apache in the foreground
CMD ["httpd", "-DFOREGROUND"]