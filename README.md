## Splunk SDK for JavaScript Example: SharePoint App Part

This example contains an SharePoint hosted AppPart for SharePoint 2013.

To run this example, install SharePoint 2013, and configure Visual Studio to use it. Deploy the 
project using the **BUILD** menu, or press F5 to debug. Edit a page and insert 
the app part. 

The app part queries Splunk for request performance  based on SharePoint ULS logs. To get ULS logs to Splunk,
add the following to props.conf, and use ULS as source type of the log files.

    [ULS]
    BREAK_ONLY_BEFORE = \d\d/\d\d/\d\d\d\d\s\d\d:\d\d:\d\d.\d\d[^*]
    NO_BINARY_CHECK = 1
    TIME_FORMAT = %m/%d/%Y %H:%M:%S.%3N
    TZ = Canada/Pacific
    pulldown_type = 1
    
To get logs of remote SharePoint servers, you may monitor SharePoint log folder using UNC. Splunkd must be running under an account that has access 
to the UNC share in that case.

The app part uses SharePoint 2013's built in web proxy for browser's Single Origin Policy. The web proxy drops `authorization` headers (with entries in ULS like "[web proxy] Authorization headers not allowed. Silently ignored"). Thus, for the example to run as is, Splunk must be running without authentication. That is the default of Splunk Free. The example uses http to access Splunkd's management port. To use https, the Splunk certificate needs to be trusted. With https, it is also worth checking if SharePoint proxy still drops authorization headers.