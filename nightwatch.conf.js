module.exports = {
    src_folders: './tests',
    page_objects_path: './pages',
    custom_commands_path: '',
    custom_assertions_path: '',
    globals_path: '',
    test_workers: {
        enabled: false
    },
    detailed_output: false,
    live_output: true,
    test_settings: {
        default: {
            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('chromedriver').path,
            },
            desiredCapabilities: {
                browserName: 'chrome',
                chromeOptions: {
                    args: ["window-size=1920,1080"]
                    
                          },
                javascriptEnabled: true,
                acceptSslCerts: true,
            },
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './tests_output/screenshots'
            }
        },
        firefox: {
            webdriver: {
                start_process: true,
                port: 4444,
                server_path: require('geckodriver').path,
            },
            desiredCapabilities: {
                browserName: 'firefox'
            },
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: true,
                path: './tests_output/screenshots'
            }
        }
    }
};
