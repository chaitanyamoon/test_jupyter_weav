import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the test_jupyter_weav extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'test_jupyter_weav:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension test_jupyter_weav is activated!');
  }
};

export default extension;
