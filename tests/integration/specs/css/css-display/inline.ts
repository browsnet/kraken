describe('Display inline', () => {
  it('should work with basic samples', async () => {
    const container = document.createElement('div');
    setStyle(container, {
      width: '100px',
      height: '100px',
      display: 'inline',
      backgroundColor: '#666',
    });
    container.appendChild(
      document.createTextNode('This box has no width and height')
    );

    document.body.appendChild(container);
    document.body.appendChild(
      document.createTextNode(
        'This text should display as the same line as the box'
      )
    );

    await matchScreenshot();
  });

  xit('textNode only if have one space', async () => {
    let containerStyle = {
      backgroundColor: 'fuchsia',
      color: 'black',
      font: '20px',
      margin: '10px'
    };

    let container = createElement('div', containerStyle, [
      createElement('span', {}, createText('Several ')),
      createElement('span', {}, createText(' inline elements')),
      createText(' are '),
      createElement('span', {}, createText('in this')),
      createText(' sentence.')
    ]);

    let container2 = createElement('div', containerStyle, [
      createText('Several inline elements are in this sentence.')
    ]);

    append(BODY, container);
    append(BODY, container2);

    await matchScreenshot();
  });
});
