library('data.table')

SlugBooks <- function() {
  books <- fread('data/books.csv')
  books[, slug := tolower(title)]
  books[, slug := gsub(' ', '-', slug)]
  books[, slug := gsub('[^0-9a-zA-Z\\-]', '', slug)]
  write.csv(books, 'data/books.csv', row.names=F)
}

StackRatings <- function() {
  books <- fread('data/books.csv')
  stu <- fread('data/ratings/stu.csv')[!is.na(Rating)]
  stu[, User := 'S']
  
  james <- fread('data/ratings/james.csv')[!is.na(Rating)]
  james[, User := 'J']
  
  pierce <- fread('data/ratings/pierce.csv')[!is.na(Rating)]
  pierce[, User := 'P']
  
  chris <- fread('data/ratings/chris.csv')[!is.na(Rating)]
  chris[, User := 'C']
  
  dan <- fread('data/ratings/dan.csv')[!is.na(Rating)]
  dan[, User := 'D']
  
  sam <- fread('data/ratings/sam.csv')[!is.na(Rating)]
  sam[, User := 'G']
  
  
  dat <- rbind(stu, james, pierce, chris, dan, sam)
  dat <- dat[, .(title=Title, author=Author, rating=Rating, user=User)]
  dat <- merge(dat, books, by=c('title', 'author'))
  write.csv(dat, 'data/ratings.csv', row.names=F)
}

LoadRatings <- function(groups=c('JLPPBC')) {
  dat <- fread('data/ratings.csv')
  dat <- dat[, .(Title=title, Author=author, Rating=rating, User=user,
                 Group=group)]
  return(dat[Group %in% groups])
}

ShapeRatingTable <- function(df) {
  df[, rating.string := as.character(round(Rating, 1))]
  people.wide <- dcast(df, Title + Author ~ User, value.var = 'rating.string', fill='--')
  agg <- df[, .(Avg=round(mean(Rating), 1),
                Ratings=.N,
                Std.Dev=round(sd(Rating), 1)), .(Title, Author)]
  
  agg[, Std.Dev := ifelse(is.na(Std.Dev), '--', as.numeric(Std.Dev))]
  
  wide <- merge(agg, people.wide, by=c('Title', 'Author'))
  return(wide)
}

TrimRatingTable <- function(df) {
  return(df[, .(Title, Author, Avg, C, D, G, J, P, S)])
}

WriteTableJSON <- function(df, path) {
  df.json <- toJSON(df, dataframe='rows')
  fileConn<-file(path)
  writeLines(df.json, fileConn)
  close(fileConn)
}
