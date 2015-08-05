//import 'bootstrap';
//import 'bootstrap/css/bootstrap.css!';

export class App {

    configureRouter(config, router) {
        config.title = 'Aurelia Thang';
        config.map([

            //---- HOME
            {
                route:    ['','welcome'],
                name:      'welcome',
                moduleId:  './welcome',
                nav:       true,
                title:     'Nested Test'
            }
        ]);

        this.router = router;
    }
}
