<!DOCTYPE html>
<!-- define angular app -->
<html ng-app="sumologic">
  <head>
    <meta http-equiv='Content-Type', content='text/html; charset=utf-8' >
    <meta http-equiv='Cache-Control', content='no-cache, no-store, must-revalidate'>
    <meta http-equiv='Pragma', content='no-cache'>
    <meta http-equiv='Expires', content='0'>
    <meta name='fragment', content='!'>
    <link rel="import" href="indexcss.html">
    <link rel="import" href="indexjs.html">
  </head>
  <body ng-cloak>
    <div layout="column">
      <section layout="row">
        <md-toolbar class="md-whiteframe-z2" style="background-color:#3bb9ff">
            <div class="md-toolbar-tools">
                <div flex-order-sm="20">
                    <a href="#">
                        Sumo Logic
                    </a>
                </div>
            </div>
        </md-toolbar>
      </section>

      <md-content layout="row" class="mh600" flex>
          <div layout="column" flex id="content">
            <md-content flex layout-padding>
              <div ng-view></div>
            </md-content>
          </div>
      </md-content>
      <div team>
    </div>
  </body>
</html>