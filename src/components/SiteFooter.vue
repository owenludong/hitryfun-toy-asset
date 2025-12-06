<template>
  <footer class="site-footer">
    <div class="socials">
      <a href="https://www.tiktok.com/@calmpurr" target="_blank" aria-label="TikTok">
        <svg t="1761753473283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6835" width="200" height="200"><path d="M795.097316 453.530738c-56.061724 0.622364-106.519893-16.195129-153.860552-47.341796V624.833422c0 97.174187-66.030933 180.647253-160.091022 202.449351-128.318578 29.27616-236.705564-63.538062-250.410098-174.415644-14.326898-110.879858 56.684089-208.05632 165.073352-229.858418 21.177458-4.359964 52.324124-4.359964 69.766257-0.622364v117.109191c-4.984604-1.247004-9.969209-2.490596-14.951537-3.11296-42.358329-7.4752-83.470791 13.703396-100.29056 52.324124-16.817493 38.620729-5.606969 83.469653 28.656071 109.632854 28.653796 22.424462 60.421689 25.536284 92.813084 10.587022 32.393671-14.32576 49.835804-40.487822 53.571129-75.994454 0.62464-4.982329 0.62464-10.589298 0.62464-16.193991V196.265529c0-11.834027 0-11.834027 11.832889-11.834027h92.81536c6.85056 0 9.344569 1.244729 9.966933 9.343431 4.982329 72.257991 59.800462 133.926684 130.189085 143.271254 7.4752 1.245867 15.57504 1.868231 24.296106 2.489457v113.995094z" fill="#333333" p-id="6836"></path></svg>
      </a>
       <a href="https://www.instagram.com/calmpurr" target="_blank" aria-label="Instagram">
        <svg t="1761753668967" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8273" width="32" height="32"><path d="M682.666667 128H341.333333a213.333333 213.333333 0 0 0-213.333333 213.333333v341.333334a213.333333 213.333333 0 0 0 213.333333 213.333333h341.333334a213.333333 213.333333 0 0 0 213.333333-213.333333V341.333333a213.333333 213.333333 0 0 0-213.333333-213.333333z m138.666666 554.666667A139.093333 139.093333 0 0 1 682.666667 821.333333H341.333333A139.093333 139.093333 0 0 1 202.666667 682.666667V341.333333A139.093333 139.093333 0 0 1 341.333333 202.666667h341.333334A139.093333 139.093333 0 0 1 821.333333 341.333333z m-64-373.333334a42.666667 42.666667 0 1 1-42.666666-42.666666 42.666667 42.666667 0 0 1 42.666666 42.666666zM512 320a192 192 0 1 0 192 192A191.573333 191.573333 0 0 0 512 320z m0 309.333333A117.333333 117.333333 0 1 1 629.333333 512 117.333333 117.333333 0 0 1 512 629.333333z" p-id="8274"></path></svg>
      </a>
      <a href="https://www.facebook.com/862252023639525" target="_blank" aria-label="Facebook">
        <svg t="1762019438711" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4631" width="48" height="48"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32z m-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6 44.2 0 82.1 3.3 93.2 4.8v107.9z" p-id="4632"></path></svg>
      </a>

    </div>

    <div class="links-row">
      <router-link to="/about-us">{{ $t('aboutus') }}</router-link> ·
      <router-link to="/contact-us">{{ $t('contactus') }}</router-link>
    </div>

    <div class="links-row">
      <router-link to="/private-policy">{{ $t('privacypolicy') }}</router-link> ·
      <router-link to="/terms">{{ $t('terms') }}</router-link> ·
      <router-link to="/refund-policy">{{ $t('returnpolicy') }}</router-link>
    </div>

    <p>© 2025 CalmPurr · {{ $t('footertitle') }}</p>

  </footer>
</template>

<style scoped>

/* ✅ 两行链接 */
.links-row {
  margin: 4px 0;
}

.links-row a {
  color: #3c4646;
  text-decoration: none;
  transition: color 0.2s;
}

.links-row a:hover {
  color: #000;
  text-decoration: underline;
}

.site-footer {
  background: #f7f7f7;
  color: #6b7280;
  text-align: center;
  padding: 16px 8px;
  font-size: 13px;
  line-height: 1.5;
  border-top: 1px solid #e5e7eb;
  width: 100%;
}

.site-footer .links {
  margin: 10px 0;
}

.site-footer .links a {
  color: #3c4646;
  text-decoration: none;
  transition: color 0.2s;
}

.site-footer .links a:hover {
  color: #000;
  text-decoration: underline;
}

.site-footer .socials {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 8px;
}

.icon {
  width: 22px;
  height: 22px;
  color: #444;
  transition: color 0.2s, transform 0.2s ease;
}

.icon:hover {
  color: #000;
  transform: scale(1.1);
}
</style>
