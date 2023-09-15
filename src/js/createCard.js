export function createCatInfo(arr) {
  return arr
    .map(
      item => ` <div class='photo-card'>
    <img src='${item.webformatURL}' alt='${item.tags}' loading='lazy' />
    <div class='info'>
      <p class='info-item'>
        <b>Likes</b>${item.likes}
      </p>
      <p class='info-item'>
        <b>Views</b>${item.views}
      </p>
      <p class='info-item'>
        <b>Comments</b>${item.comments}
      </p>
      <p class='info-item'>
        <b>Downloads</b>${item.downloads}
      </p>
    </div>
  </div>`
    )
    .join('');
}
