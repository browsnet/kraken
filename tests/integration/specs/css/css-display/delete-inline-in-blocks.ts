xdescribe('delete-inline-in-blocks', () => {
  it('beginning-001', async done => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px',
    };
    let innerDivStyle = {
      margin: '5px 0',
    };
    let nodeToDeleteStyle = {
      borderLeft: '5px solid yellow',
      borderRight: '5px solid yellow',
    };
    let nodeToDelete = createElement(
      'span',
      nodeToDeleteStyle,
      createText('Span to remove')
    );
    let container1 = createElement('div', containerStyle, [
      nodeToDelete,
      createElement('div', innerDivStyle, createText('First block')),
      createText('\nAnonymous second block\n'),
      createElement('div', innerDivStyle, createText('Third block')),
    ]);

    async function onClick() {
      container1.removeChild(nodeToDelete);
      await matchScreenshot();
      BODY.removeEventListener('click', onClick);
      done();
    }

    BODY.addEventListener('click', onClick);

    append(BODY, container1);
    await matchScreenshot();

    BODY.click();
  });

  it('end-001', async done => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px',
    };
    let innerDivStyle = {
      margin: '10px 0',
    };
    let nodeToDeleteStyle = {
      borderLeft: '5px solid yellow',
      borderRight: '5px solid yellow',
    };
    let nodeToDelete = createElement(
      'span',
      nodeToDeleteStyle,
      createText('Span to remove')
    );
    let container1 = createElement('div', containerStyle, [
      createElement('div', innerDivStyle, createText('First block')),
      createText('\nAnonymous second block\n'),
      createElement('div', innerDivStyle, createText('Third block')),
      nodeToDelete,
    ]);

    async function onClick() {
      container1.removeChild(nodeToDelete);
      await matchScreenshot();
      BODY.removeEventListener('click', onClick);
      done();
    }

    BODY.addEventListener('click', onClick);

    append(BODY, container1);
    await matchScreenshot();

    BODY.click();
  });

  it('middle-001', async done => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px',
    };
    let innerDivStyle = {
      margin: '10px 0',
    };
    let nodeToDeleteStyle = {
      borderLeft: '5px solid yellow',
      borderRight: '5px solid yellow',
    };
    let nodeToDelete = createElement(
      'span',
      nodeToDeleteStyle,
      createText('Span to remove')
    );
    let container1 = createElement('div', containerStyle, [
      createElement('div', innerDivStyle, createText('First block')),
      createText('\nAnonymous second block\n'),
      nodeToDelete,
      createElement('div', innerDivStyle, createText('Third block')),
    ]);

    async function onClick() {
      container1.removeChild(nodeToDelete);
      await matchScreenshot();
      BODY.removeEventListener('click', onClick);
      done();
    }

    BODY.addEventListener('click', onClick);

    append(BODY, container1);
    await matchScreenshot();

    BODY.click();
  });

  it('middle-002', async done => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px',
    };
    let innerDivStyle = {
      margin: '10px 0',
    };
    let nodeToDeleteStyle = {
      borderLeft: '5px solid yellow',
      borderRight: '5px solid yellow',
    };
    let nodeToDelete = createElement(
      'span',
      nodeToDeleteStyle,
      createText('Span to remove')
    );
    let container1 = createElement('div', containerStyle, [
      createElement('div', innerDivStyle, createText('First block')),
      nodeToDelete,
      createElement('div', innerDivStyle, createText('Second block')),
      createElement('div', innerDivStyle, createText('Third block')),
    ]);

    async function onClick() {
      container1.removeChild(nodeToDelete);
      await matchScreenshot();
      BODY.removeEventListener('click', onClick);
      done();
    }

    BODY.addEventListener('click', onClick);

    append(BODY, container1);
    await matchScreenshot();

    BODY.click();
  });

  it('middle-003', async done => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px',
    };
    let innerDivStyle = {
      margin: '10px 0em',
    };
    let nodeToDeleteStyle = {
      borderLeft: '5px solid yellow',
      borderRight: '5px solid yellow',
    };
    let nodeToDelete = createElement(
      'span',
      nodeToDeleteStyle,
      createText('Span to remove')
    );
    let container1 = createElement('div', containerStyle, [
      createElement('div', innerDivStyle, createText('First block')),
      createElement('div', innerDivStyle, createText('Second block')),
      nodeToDelete,
      createElement('div', innerDivStyle, createText('Third block')),
    ]);

    async function onClick() {
      container1.removeChild(nodeToDelete);
      await matchScreenshot();
      BODY.removeEventListener('click', onClick);
      done();
    }

    BODY.addEventListener('click', onClick);

    append(BODY, container1);
    await matchScreenshot();

    BODY.click();
  });
});
