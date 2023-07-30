# PWA Text Editor

![license](https://img.shields.io/badge/License-MIT-yellowgreen)

## Description
In this project, I have successfully developed a feature-rich text editor that operates directly in the browser, adhering to the high standards of a Progressive Web App. This single-page application boasts several robust functionalities, ensuring data persistence even when certain browser options are unavailable. Furthermore, it has been optimized to function seamlessly in offline mode, guaranteeing uninterrupted user experiences.

Throughout the development process, I leveraged a multitude of packages to enhance the app's capabilities. Notably, the "idb" package played a pivotal role in facilitating data retrieval and storage within an IndexedDB database. Additionally, I harnessed the power of "babel," a proficient transpiler that effortlessly converts JavaScript into plain ES5, and "webpack," an indispensable tool for bundling JavaScript files, optimizing their usage within the browser environment.

Creating the PWA Text Editor served as an invaluable learning experience, introducing me to an array of novel concepts and cutting-edge technologies. My skill set has now expanded significantly as I can confidently assess key Lighthouse metrics and expertly configure webpack using a dedicated "webpack.config.js" file. I have acquired the proficiency to bundle CSS and image assets effectively, thanks to webpack plugins that automate the generation of an "index.html" file and CSS stylesheet. Moreover, I am well-versed in implementing service workers, adeptly integrating them into web applications using "workbox." My knowledge also extends to the seamless implementation of indexedDB, enabling me to skillfully execute CRUD commands on an indexedDB instance.

Through this project, I have not only honed my technical abilities but also gained a deeper appreciation for the intricacies of building progressive web applications.

## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Credits](#credits)
4. [Questions](#questions)  
5. [License](#license)


## Installation
- Download and install the Node.js LTS version from [Node.js](https://nodejs.org/en).
- Clone the repo using:

        git clone git@github.com:Dinh282/pwa-text-editor.git

- Or download the code from https://github.com/Dinh282/pwa-text-editor.git and
open it with VS Code.       
- Make sure you are in the root path of the project folder and install dependencies for the project with:

        npm i

- After installing the dependencies you can run the following command:

        npm run start

- The npm run start command will cd you into the client and server folders and download the required dependencies concurrently as well as initiating the app.


## Usage
- After successfully launching the app, you can access it through your browser by navigating to http://localhost:3000/.
- To conveniently download the app as an icon on your desktop, simply click the install button or the install icon in the URL bar.
- Thanks to its Progressive Web App design, you have the flexibility to utilize PWA Text Editor either directly in the browser or as a standalone application.
- Be sure to take a moment to inspect various aspects of the app, such as the page's manifest file, service workers, local storage, and IndexedDB storage. Additionally, observe how the app behaves when your Network is set to offline mode.
- Rest assured that the text you type in the editor will persist across different scenarios, including exiting the app, transitioning between the browser and the standalone version, or switching between online and offline modes.


- Alternatively, you can interact with the live app deployed at: https://still-anchorage-67038-17721ce39121.herokuapp.com/


or view the demo video below:


The following are screenshots of :

:
![Screenshot of ](./assets/images/)




## Credits:
1. https://www.youtube.com/watch?v=sFsRylCQblw&list=LL&index=1 (help with understanding PWAs)

2. https://www.youtube.com/watch?v=QHm6-xu4F_I&list=LL&index=2 (Help with workbox)

3. https://webpack.js.org/loaders/html-loader/ (Webpack documentation).

4. https://developer.chrome.com/en/docs/lighthouse/performance/performance-scoring/ (Help with understanding Lighthouse metrics)

5. https://developer.chrome.com/docs/workbox/service-worker-overview/#:~:text=Service%20workers%20are%20specialized%20JavaScript,well%20as%20boost%20page%20performance. (Help with service workers)

6. https://babeljs.io/docs/ (Babel docs)

7. https://web.dev/what-are-pwas/ (Help with PWAs)

8. Instructor, TAs, and classmates.

## Questions
Feel free to contact me at nguyen_dinh282@yahoo.com for additional information.  
Also, check out my other projects on [GitHub](https://github.com/Dinh282)


## License

Please refer to the LICENSE section in the repository.


---
