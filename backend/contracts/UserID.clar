(define-map users 
  { user-principal: principal } 
  { name: (string-utf8 50), 
    job-title: (string-utf8 50), 
    about: (string-utf8 100), 
    x-link: (string-utf8 100), 
    github-link: (string-utf8 100), 
    website-link: (string-utf8 100), 
    linkedin-link: (string-utf8 100) })

(define-public (add-user (name (string-utf8 50)) 
                         (job-title (string-utf8 50)) 
                         (about (string-utf8 100)) 
                         (x-link (string-utf8 100)) 
                         (github-link (string-utf8 100)) 
                         (website-link (string-utf8 100)) 
                         (linkedin-link (string-utf8 100)))
    (begin
        (map-insert users 
                    { user-principal: tx-sender } 
                    { name: name, 
                      job-title: job-title, 
                      about: about, 
                      x-link: x-link, 
                      github-link: github-link, 
                      website-link: website-link, 
                      linkedin-link: linkedin-link })
        (ok true)))

(define-read-only (get-user (user-principal principal))
    (map-get? users { user-principal: user-principal }))
