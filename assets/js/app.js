/* ==========================================================================
   MyMentor shared app shell: auth guard, sidebar nav, and progress storage.

   Storage note: this currently reads/writes localStorage, matching the
   existing signup.html. It is deliberately isolated behind the functions
   below so that swapping to Firebase Auth + Firestore later means editing
   ONLY this file — no page that calls MMApp.requireUser() / MMApp.getProgress()
   needs to change.
   ========================================================================== */

const MMApp = (() => {
     function getCurrentUser() {
            try {
                     return JSON.parse(localStorage.getItem('currentUser') || 'null');
            } catch (e) {
                     return null;
            }
     }

                 function requireUser(loginPage = 'signup.html') {
                        const user = getCurrentUser();
                        if (!user) {
                                 window.location.href = loginPage;
                                 return null;
                        }
                        return user;
                 }

                 function logout(redirectTo = 'index.html') {
                        localStorage.removeItem('currentUser');
                        window.location.href = redirectTo;
                 }

                 function initials(name) {
                        if (!name) return '?';
                        return name.trim().split(/\s+/).slice(0, 2).map(p => p[0].toUpperCase()).join('');
                 }

                 /* ---------- Progress: per-user, namespaced in localStorage ---------- */

                 function progressKey(user) {
                        const id = (user && (user.email || user.fullName)) || 'guest';
                        return `mm_progress_${id}`;
                 }

                 function getProgress(user) {
                        try {
                                 return JSON.parse(localStorage.getItem(progressKey(user)) || '{}');
                        } catch (e) {
                                 return {};
                        }
                 }

                 function setProgress(user, patch) {
                        const current = getProgress(user);
                        const next = { ...current, ...patch };
                        localStorage.setItem(progressKey(user), JSON.stringify(next));
                        return next;
                 }

                 /* ---------- Sidebar navigation ---------- */

                 const NAV_ITEMS = [
                    { key: 'dashboard', href: 'dashboard.html', icon: '◆', label: 'Dashboard' },
                    { key: 'universities', href: 'universities.html', icon: '🎓', label: 'Universities' },
                    { key: 'match', href: 'match.html', icon: '🧭', label: 'Find My Fit' },
                    { key: 'personal-statement', href: 'personal-statement-guide.html', icon: '✎', label: 'Personal Statement' },
                    { key: 'ucas-checklist', href: 'ucas-checklist.html', icon: '☑', label: 'UCAS Checklist' },
                    { key: 'english', href: 'english-certifications-guide.html', icon: '🗣', label: 'English Certification' },
                    { key: 'scholarships', href: 'scholarships.html', icon: '✦', label: 'Scholarships' }
                      ];

                 const INTERNSHIP_NAV_ITEMS = [
                    { key: 'internships', href: 'internships.html', icon: '💼', label: 'Internship Hub' },
                    { key: 'internship-cv', href: 'internship-cv.html', icon: '📄', label: 'CV & Cover Letter' },
                    { key: 'internship-tests', href: 'internship-tests.html', icon: '⏱', label: 'Online Assessments' }
                      ];

                 function renderSidebar(activeKey) {
                        const mount = document.getElementById('mm-sidebar');
                        if (!mount) return;
                        const user = getCurrentUser();

       const toLinks = (items) => items.map(item => `
             <a class="nav-link ${item.key === activeKey ? 'active' : ''}" href="${item.href}">
                     <span class="nav-icon">${item.icon}</span>
                             <span>${item.label}</span>
                                     <span class="dot" style="margin-left:auto"></span>
                                           </a>
                                               `).join('');
       const links = toLinks(NAV_ITEMS);
       const internshipLinks = toLinks(INTERNSHIP_NAV_ITEMS);

       mount.innerHTML = `
             <div class="brand">
                     <span class="brand-mark">My<span>Mentor</span></span>
                           </div>
                                 <div class="nav-group">
                                         <div class="nav-label">Your Journey</div>
                                                 ${links}
                                                       </div>
                                 <div class="nav-group">
                                         <div class="nav-label">Internships</div>
                                                 ${internshipLinks}
                                                       </div>
                                                             <div class="sidebar-footer">
                                                                     <div class="user-chip">
                                                                               <div class="user-avatar">${initials(user && user.fullName)}</div>
                                                                                         <div class="user-meta">
                                                                                                     <div class="name">${(user && user.fullName) || 'Guest'}</div>
                                                                                                                 <div class="role">Student</div>
                                                                                                                           </div>
                                                                                                                                   </div>
                                                                                                                                           <a class="logout-link" href="#" id="mm-logout-link">Log out</a>
                                                                                                                                                 </div>
                                                                                                                                                     `;

       const logoutLink = document.getElementById('mm-logout-link');
                        if (logoutLink) {
                                 logoutLink.addEventListener('click', (e) => {
                                            e.preventDefault();
                                            logout();
                                 });
                        }
                 }

                 return { getCurrentUser, requireUser, logout, getProgress, setProgress, renderSidebar, initials };
})();
