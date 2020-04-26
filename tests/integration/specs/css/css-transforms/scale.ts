describe('Transform scale', () => {
  it('001', async () => {
    document.body.appendChild(
      createElement('div', {
        width: '100px',
        height: '100px',
        marginTop: '10px',
        backgroundColor: 'red',
        transform: 'scale(0.6, 0.8)',
      })
    );

    await matchScreenshot();
  });

  it('002', async () => {
      document.body.appendChild(
        createElement('div', {
          width: '100px',
          height: '100px',
          marginTop: '10px',
          backgroundColor: 'red',
          transform: 'scale(0.6)',
        })
      );

      await matchScreenshot();
    });
});
