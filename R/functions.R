library('data.table')

LoadRatings <- function(groups=c('JLPPBC')) {
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

  
  dat <- rbind(stu, james, pierce, chris, dan)
  dat <- merge(dat, books, by=c('Title', 'Author'))
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
  return(df[, .(Title, Author, Avg, C, D, J, P, S)])
}

WriteTableJSON <- function(df, path) {
  df.json <- toJSON(df, dataframe='rows')
  fileConn<-file(path)
  writeLines(df.json, fileConn)
  close(fileConn)
}
