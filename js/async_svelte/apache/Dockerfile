FROM httpd:2.4

# Enable headers module (if not already enabled)
RUN sed -i 's/#LoadModule rewrite_module/LoadModule rewrite_module/' /usr/local/apache2/conf/httpd.conf
RUN sed -i 's/#LoadModule headers_module/LoadModule headers_module/' /usr/local/apache2/conf/httpd.conf

# Copy in your CORS config
COPY cors.conf /usr/local/apache2/conf/conf-available/cors.conf

# Include the CORS config into the main httpd.conf
RUN echo "Include conf/conf-available/cors.conf" >> /usr/local/apache2/conf/httpd.conf
